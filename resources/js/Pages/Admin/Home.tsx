import React, { useState } from "react";
import LayoutAdmin from "./Layout/LayoutAdmin";
import { useSiteContent, SiteContent } from "@/components/context/siteContentContext";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AdminHome() {
    const { contents, setContents, resetContents } = useSiteContent();
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [isAdding, setIsAdding] = useState<boolean>(false);
    const [form, setForm] = useState<Partial<SiteContent>>({});
    const [message, setMessage] = useState<string | null>(null);

    const showMessage = (msg: string) => {
        setMessage(msg);
        setTimeout(() => setMessage(null), 3000);
    };

    const handleEdit = (index: number) => {
        setEditingIndex(index);
        setForm(contents[index]);
        setIsAdding(false);
    };

    const handleSave = () => {
        if (isAdding) {
            setContents([...contents, { ...form } as SiteContent]);
            showMessage("✅ Data berhasil ditambahkan");
            setIsAdding(false);
        } else if (editingIndex !== null) {
            const updated = [...contents];
            updated[editingIndex] = { ...updated[editingIndex], ...form };
            setContents(updated);
            showMessage("✏️ Data berhasil diperbarui");
            setEditingIndex(null);
        }
        setForm({});
    };

    const handleDelete = (index: number) => {
        if (!confirm("Yakin ingin menghapus konten ini?")) return;
        const updated = contents.filter((_, i) => i !== index);
        setContents(updated);
        showMessage("🗑️ Data berhasil dihapus");
        if (editingIndex === index) setEditingIndex(null);
    };

    const handleAddNew = () => {
        setIsAdding(true);
        setEditingIndex(null);
        setForm({});
    };

    const handleReset = () => {
        resetContents();
        showMessage("♻️ Data berhasil direset");
    };

    return (
        <LayoutAdmin title="Manage Home Content">
            {/* Header */}
            <div className="flex justify-between mb-6 items-center">
                <h1 className="text-2xl font-bold">Manage Home Content</h1>
                <div className="flex gap-2">
                    <Button onClick={handleAddNew} className="bg-green-600 hover:bg-green-700">
                        + Add New
                    </Button>
                    <Button onClick={handleReset} variant="destructive">
                        Reset Content
                    </Button>
                </div>
            </div>

            {/* Notifikasi */}
            <AnimatePresence>
                {message && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`mb-4 p-3 rounded border shadow-md
                        ${message.includes("hapus")
                                ? "bg-red-100 text-red-700 border-red-300"
                                : message.includes("reset")
                                    ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                                    : "bg-green-100 text-green-700 border-green-300"}`}
                    >
                        {message}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Tabel Konten */}
            <div className="overflow-x-auto border rounded-lg shadow-sm">
                <table className="min-w-full border-collapse">
                    <thead className="bg-gradient-to-br from-[#E45EFC] via-[#A5DBFB] to-[#387AFF]">
                        <tr>
                            <th className="p-3 border-b w-12 text-center">No</th>
                            <th className="p-3 border-b">Section</th>
                            <th className="p-3 border-b">Title</th>
                            <th className="p-3 border-b">Subtitle</th>
                            <th className="p-3 border-b text-center">Image</th>
                            <th className="p-3 border-b text-center relative left-6">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <AnimatePresence>
                            {contents.map((c, i) => (
                                <motion.tr
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2, delay: i * 0.05 }}
                                    className={`text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
                                >
                                    <td className="p-3 border-b text-center">{i + 1}</td>
                                    <td className="p-3 border-b">{c.section}</td>
                                    <td className="p-3 border-b">{c.title || "-"}</td>
                                    <td className="p-3 border-b">{c.subtitle || "-"}</td>
                                    <td className="p-3 border-b text-center">
                                        {c.image ? (
                                            <img
                                                src={c.image}
                                                alt={c.title}
                                                className="h-10 w-10 object-cover rounded mx-auto"
                                            />
                                        ) : "-"}
                                    </td>
                                    <td className="p-3 border-b text-center">
                                        <div className="flex justify-center relative left-6 gap-2">
                                            <Button
                                                onClick={() => handleEdit(i)}
                                                className="bg-blue-500 hover:bg-blue-600 w-20 text-xs"
                                            >
                                                ✏️ Edit
                                            </Button>
                                            <Button
                                                onClick={() => handleDelete(i)}
                                                variant="destructive"
                                                className="w-20 text-xs"
                                            >
                                                🗑️ Delete
                                            </Button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>

            {/* Form Tambah/Edit di tengah layar */}
            <AnimatePresence>
                {(editingIndex !== null || isAdding) && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-full"
                        >
                            <h2 className="text-lg font-semibold mb-4">
                                {isAdding ? "Add New Content" : "Edit Content"}
                            </h2>

                            <div className="flex flex-col gap-3">
                                {/* Ganti input section jadi dropdown */}
                                <select
                                    className="border p-2 rounded"
                                    value={form.section || ""}
                                    onChange={(e) => setForm({ ...form, section: e.target.value })}
                                >
                                    <option value="" disabled>
                                        Select Section
                                    </option>
                                    <option value="why-mit">Why-MIT</option>
                                    <option value="implementation">Implementation</option>
                                </select>

                                <input
                                    type="text"
                                    placeholder="Title"
                                    className="border p-2 rounded"
                                    value={form.title || ""}
                                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Subtitle"
                                    className="border p-2 rounded"
                                    value={form.subtitle || ""}
                                    onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Image URL"
                                    className="border p-2 rounded"
                                    value={form.image || ""}
                                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                                />
                            </div>

                            <div className="flex gap-2 mt-4 justify-end">
                                <Button
                                    onClick={handleSave}
                                    className="bg-green-600 hover:bg-green-700"
                                >
                                    Save
                                </Button>
                                <Button
                                    onClick={() => {
                                        setEditingIndex(null);
                                        setIsAdding(false);
                                        setForm({});
                                    }}
                                    variant="destructive"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </LayoutAdmin>
    );
}
