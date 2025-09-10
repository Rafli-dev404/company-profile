import React, { useState } from "react";
import LayoutAdmin from "./Layout/LayoutAdmin";
import { useSiteContent, SiteContent } from "@/components/context/siteContentContext";
import { motion, AnimatePresence } from "framer-motion";

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
            <div className="flex justify-between mb-6 items-center">
                <h1 className="text-2xl font-bold">Manage Home Content</h1>
                <div className="flex gap-2">
                    <button
                        onClick={handleAddNew}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        + Add New
                    </button>
                    <button
                        onClick={handleReset}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Reset Content
                    </button>
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
                            ${message.includes("hapus") ? "bg-red-100 text-red-700 border-red-300"
                                : message.includes("reset") ? "bg-yellow-100 text-yellow-700 border-yellow-300"
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
                                            <button
                                                onClick={() => handleEdit(i)}
                                                className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600 w-20"
                                            >
                                                ✏️ Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(i)}
                                                className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 w-20"
                                            >
                                                🗑️ Delete
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>

            {/* Form Tambah/Edit */}
            <AnimatePresence>
                {(editingIndex !== null || isAdding) && (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-20 right-10 bg-white p-6 rounded-xl shadow-lg w-96 z-50 border"
                    >
                        <h2 className="font-bold mb-3">
                            {isAdding ? "Add New Content" : "Edit Content"}
                        </h2>
                        <input
                            type="text"
                            placeholder="Section"
                            value={form.section || ""}
                            onChange={(e) => setForm({ ...form, section: e.target.value })}
                            className="border p-2 rounded w-full mb-2"
                        />
                        <input
                            type="text"
                            placeholder="Title"
                            value={form.title || ""}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            className="border p-2 rounded w-full mb-2"
                        />
                        <input
                            type="text"
                            placeholder="Subtitle"
                            value={form.subtitle || ""}
                            onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                            className="border p-2 rounded w-full mb-2"
                        />
                        <textarea
                            placeholder="Description"
                            value={form.description || ""}
                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                            className="border p-2 rounded w-full mb-2"
                        />
                        <input
                            type="text"
                            placeholder="Image URL"
                            value={form.image || ""}
                            onChange={(e) => setForm({ ...form, image: e.target.value })}
                            className="border p-2 rounded w-full mb-2"
                        />

                        <div className="flex justify-end gap-2 mt-3">
                            <button
                                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                                onClick={() => {
                                    setEditingIndex(null);
                                    setIsAdding(false);
                                    setForm({});
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </LayoutAdmin>
    );
}
