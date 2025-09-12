import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TeamMember } from "@/components/context/teamContentContext";

interface TeamFormProps {
    form: Partial<TeamMember>;
    setForm: React.Dispatch<React.SetStateAction<Partial<TeamMember>>>;
    isAdding: boolean;
    onSave: () => void;
    onCancel: () => void;
}

export default function TeamForm({
    form,
    setForm,
    isAdding,
    onSave,
    onCancel,
}: TeamFormProps) {
    return (
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
                    <Button onClick={onSave} className="bg-green-600 hover:bg-green-700">
                        Save
                    </Button>
                    <Button onClick={onCancel} variant="destructive">
                        Cancel
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
