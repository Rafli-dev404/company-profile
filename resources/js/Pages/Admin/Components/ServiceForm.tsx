import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Service } from "@/components/context/serviceContentContext";
import ServiceFormProps from "../Interface/ServiceInterface";

export default function ServiceForm({
    form,
    setForm,
    isAdding,
    onSave,
    onCancel,
}: ServiceFormProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50"
        >
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2
                    className={`text-lg font-bold mb-4 ${isAdding ? "text-green-600" : "text-blue-600"
                        }`}
                >
                    {isAdding ? "Add Service" : "Edit Service"}
                </h2>

                <input
                    type="text"
                    placeholder="Title"
                    value={form.title || ""}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full border p-2 mb-3 rounded"
                />

                <textarea
                    placeholder="Description"
                    value={form.description || ""}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="w-full border p-2 mb-3 rounded"
                />

                <input
                    type="text"
                    placeholder="Features (comma separated)"
                    value={form.features?.join(", ") || ""}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            features: e.target.value.split(",").map((f) => f.trim()),
                        })
                    }
                    className="w-full border p-2 mb-3 rounded"
                />

                <input
                    type="text"
                    placeholder="Image URL"
                    value={form.image || ""}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    className="w-full border p-2 mb-3 rounded"
                />

                <input
                    type="text"
                    placeholder="Link"
                    value={form.link || ""}
                    onChange={(e) => setForm({ ...form, link: e.target.value })}
                    className="w-full border p-2 mb-3 rounded"
                />

                <input
                    type="text"
                    placeholder="Location"
                    value={form.location || ""}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full border p-2 mb-3 rounded"
                />

                <div className="flex justify-end gap-2 mt-4">
                    <Button
                        onClick={onSave}
                        className="bg-green-600 hover:bg-green-700"
                    >
                        {isAdding ? "Save" : "Update"}
                    </Button>
                    <Button variant="destructive" onClick={onCancel}>
                        Cancel
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
