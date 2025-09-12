import React, { useState } from "react";
import LayoutAdmin from "./Layout/LayoutAdmin";
import { useTeam, TeamMember } from "@/components/context/teamContentContext";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AdminTeam() {
    const { members, setMembers, resetMembers } = useTeam();
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [isAdding, setIsAdding] = useState<boolean>(false);
    const [form, setForm] = useState<Partial<TeamMember>>({});
    const [message, setMessage] = useState<string | null>(null);

    const showMessage = (msg: string) => {
        setMessage(msg);
        setTimeout(() => setMessage(null), 3000);
    };

    const handleAddNew = () => {
        setIsAdding(true);
        setEditingIndex(null);
        setForm({ name: "", title: "", image: "", instagram: "", linkedin: "" });
    };

    const handleEdit = (index: number) => {
        setEditingIndex(index);
        setForm({ ...members[index] });
        setIsAdding(false);
    };

    const handleSave = () => {
        if (!form.name || !form.title) {
            alert("Name dan Title wajib diisi!");
            return;
        }

        if (isAdding) {
            const newMember: TeamMember = { id: Date.now(), ...form } as TeamMember;
            setMembers([...members, newMember]);
            showMessage("✅ Member berhasil ditambahkan");
            setIsAdding(false);
        } else if (editingIndex !== null) {
            const updated = [...members];
            updated[editingIndex] = { ...updated[editingIndex], ...form } as TeamMember;
            setMembers(updated);
            showMessage("✏️ Member berhasil diperbarui");
            setEditingIndex(null);
        }
        setForm({});
    };

    const handleDelete = (index: number) => {
        if (!confirm("Yakin ingin menghapus member ini?")) return;
        const updated = members.filter((_, i) => i !== index);
        setMembers(updated);
        showMessage("🗑️ Member berhasil dihapus");
        if (editingIndex === index) setEditingIndex(null);
    };

    const handleReset = () => {
        resetMembers();
        showMessage("♻️ Member berhasil direset");
    };

    return (
        <LayoutAdmin title="Manage Team Members">
            {/* Header */}
            <div className="flex justify-between mb-6 items-center">
                <h1 className="text-2xl font-bold">Manage Team Members</h1>
                <div className="flex gap-2">
                    <Button onClick={handleAddNew} className="bg-green-600 hover:bg-green-700">
                        + Add New
                    </Button>
                    <Button onClick={handleReset} variant="destructive">
                        Reset Members
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
                                    : "bg-green-100 text-green-700 border-green-300"
                            }`}
                    >
                        {message}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Table Members */}
            <div className="overflow-x-auto border rounded-lg shadow-sm mb-6">
                <table className="min-w-full border-collapse">
                    <thead className="bg-gradient-to-br from-[#E45EFC] via-[#A5DBFB] to-[#387AFF]">
                        <tr>
                            <th className="p-3 border-b w-12 text-center">No</th>
                            <th className="p-3 border-b">Photo</th>
                            <th className="p-3 border-b">Name</th>
                            <th className="p-3 border-b">Title</th>
                            <th className="p-3 border-b text-center">Instagram</th>
                            <th className="p-3 border-b text-center">LinkedIn</th>
                            <th className="p-3 border-b text-center relative left-6">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.length === 0 && (
                            <tr>
                                <td colSpan={7} className="text-center py-4 text-gray-500">
                                    No team members.
                                </td>
                            </tr>
                        )}
                        {members.map((m, i) => (
                            <motion.tr
                                key={m.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, delay: i * 0.05 }}
                                className={`text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
                            >
                                <td className="p-3 border-b text-center">{i + 1}</td>
                                <td className="p-3 border-b text-center">
                                    {m.image ? (
                                        <img src={m.image} alt={m.name} className="h-10 w-10 object-cover rounded-full mx-auto" />
                                    ) : "-"}
                                </td>
                                <td className="p-3 border-b">{m.name}</td>
                                <td className="p-3 border-b">{m.title}</td>
                                <td className="p-3 border-b text-center">
                                    {m.instagram ? <a href={m.instagram} target="_blank" rel="noopener noreferrer">IG</a> : "-"}
                                </td>
                                <td className="p-3 border-b text-center">
                                    {m.linkedin ? <a href={m.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> : "-"}
                                </td>
                                <td className="p-3 border-b text-center flex gap-2 justify-center">
                                    <Button onClick={() => handleEdit(i)} className="bg-blue-500 hover:bg-blue-600 w-20 text-xs">
                                        ✏️ Edit
                                    </Button>
                                    <Button onClick={() => handleDelete(i)} variant="destructive" className="w-20 text-xs">
                                        🗑️ Delete
                                    </Button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Form for Add/Edit */}
            <AnimatePresence>
                {(isAdding || editingIndex !== null) && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white p-6 rounded-lg shadow-lg w-96"
                        >
                            <h2 className="text-lg font-semibold mb-4">
                                {isAdding ? "Add New Member" : "Edit Member"}
                            </h2>

                            <div className="flex flex-col gap-3">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="border p-2 rounded"
                                    value={form.name || ""}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Title / Profession"
                                    className="border p-2 rounded"
                                    value={form.title || ""}
                                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Photo URL"
                                    className="border p-2 rounded"
                                    value={form.image || ""}
                                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Instagram Link"
                                    className="border p-2 rounded"
                                    value={form.instagram || ""}
                                    onChange={(e) => setForm({ ...form, instagram: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="LinkedIn Link"
                                    className="border p-2 rounded"
                                    value={form.linkedin || ""}
                                    onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                                />
                            </div>

                            <div className="flex gap-2 mt-4 justify-end">
                                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">Save</Button>
                                <Button
                                    onClick={() => {
                                        setIsAdding(false);
                                        setEditingIndex(null);
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
