import React, { useState } from "react";
import LayoutAdmin from "./Layout/LayoutAdmin";
import { useService, Service } from "@/components/context/serviceContentContext";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ServiceForm from "./Components/ServiceForm";

export default function AdminService() {
    const { services, setServices, resetServices } = useService();
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [isAdding, setIsAdding] = useState<boolean>(false);
    const [form, setForm] = useState<Partial<Service>>({});
    const [message, setMessage] = useState<string | null>(null);

    const showMessage = (msg: string) => {
        setMessage(msg);
        setTimeout(() => setMessage(null), 3000);
    };

    const handleAddNew = () => {
        setIsAdding(true);
        setEditingIndex(null);
        setForm({
            title: "",
            description: "",
            features: [],
            image: "",
            link: "",
            location: "",
            bg: "white",
        });
    };

    const handleEdit = (index: number) => {
        setEditingIndex(index);
        setForm({ ...services[index] });
        setIsAdding(false);
    };

    const handleSave = () => {
        if (!form.title || !form.description) {
            alert("Title dan Description wajib diisi!");
            return;
        }

        if (isAdding) {
            const newService: Service = {
                id: Date.now(),
                title: form.title!,
                description: form.description!,
                features: form.features || [],
                image: form.image || "",
                link: form.link || "",
                location: form.location || "",
                bg: form.bg || "white",
            };
            setServices([...services, newService]);
            showMessage("✅ Service berhasil ditambahkan");
            setIsAdding(false);
        } else if (editingIndex !== null) {
            const updated = [...services];
            updated[editingIndex] = { ...updated[editingIndex], ...form } as Service;
            setServices(updated);
            showMessage("✏️ Service berhasil diperbarui");
            setEditingIndex(null);
        }
        setForm({});
    };

    const handleDelete = (index: number) => {
        if (!confirm("Yakin ingin menghapus service ini?")) return;
        const updated = services.filter((_, i) => i !== index);
        setServices(updated);
        showMessage("🗑️ Service berhasil dihapus");
        if (editingIndex === index) setEditingIndex(null);
    };

    const handleReset = () => {
        resetServices();
        showMessage("♻️ Semua service berhasil direset");
    };

    return (
        <LayoutAdmin title="Manage Services">
            {/* Header */}
            <div className="flex justify-between mb-6 items-center">
                <h1 className="text-2xl font-bold">Manage Services</h1>
                <div className="flex gap-2">
                    <Button
                        onClick={handleAddNew}
                        className="bg-green-600 hover:bg-green-700"
                    >
                        + Add New
                    </Button>
                    <Button onClick={handleReset} variant="destructive">
                        Reset Services
                    </Button>
                </div>
            </div>

            {/* Notification */}
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

            {/* Table Services */}
            <div className="overflow-x-auto border rounded-lg shadow-sm mb-6">
                <table className="min-w-full border-collapse">
                    <thead className="bg-gradient-to-br from-[#E45EFC] via-[#A5DBFB] to-[#387AFF]">
                        <tr>
                            <th className="p-3 border-b w-12 text-center">No</th>
                            <th className="p-3 border-b">Title</th>
                            <th className="p-3 border-b">Description</th>
                            <th className="p-3 border-b">Features</th>
                            <th className="p-3 border-b">Image</th>
                            <th className="p-3 border-b">Link</th>
                            <th className="p-3 border-b">Location</th>
                            <th className="p-3 border-b text-center relative left-6">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.length === 0 && (
                            <tr>
                                <td
                                    colSpan={8}
                                    className="text-center py-4 text-gray-500"
                                >
                                    No services.
                                </td>
                            </tr>
                        )}
                        {services.map((s, i) => (
                            <motion.tr
                                key={s.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, delay: i * 0.05 }}
                                className={`text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } hover:bg-gray-100`}
                            >
                                <td className="p-3 border-b text-center">{i + 1}</td>
                                <td className="p-3 border-b">{s.title}</td>
                                <td className="p-3 border-b">{s.description}</td>
                                <td className="p-3 border-b">{s.features?.join(", ")}</td>
                                <td className="p-3 border-b text-center">
                                    {s.image ? (
                                        <img
                                            src={s.image}
                                            alt={s.title}
                                            className="h-10 w-10 object-cover rounded mx-auto"
                                        />
                                    ) : (
                                        "-"
                                    )}
                                </td>
                                <td className="p-3 border-b">{s.link || "-"}</td>
                                <td className="p-3 border-b">{s.location || "-"}</td>
                                <td className="p-3 border-b text-center flex gap-2 justify-center">
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
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Form */}
            <AnimatePresence>
                {(isAdding || editingIndex !== null) && (
                    <ServiceForm
                        form={form}
                        setForm={setForm}
                        isAdding={isAdding}
                        onSave={handleSave}
                        onCancel={() => {
                            setIsAdding(false);
                            setEditingIndex(null);
                            setForm({});
                        }}
                    />
                )}
            </AnimatePresence>
        </LayoutAdmin>
    );
}
