import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SiteContent } from "@/components/context/siteContentContext"

interface ContentFormProps {
    form: Partial<SiteContent>
    setForm: React.Dispatch<React.SetStateAction<Partial<SiteContent>>>
    isAdding: boolean
    onSave: () => void
    onCancel: () => void
}

export default function ContentForm({
    form,
    setForm,
    isAdding,
    onSave,
    onCancel,
}: ContentFormProps) {
    return (
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
                <Button onClick={onSave} className="bg-green-600 hover:bg-green-700">
                    Save
                </Button>
                <Button onClick={onCancel} variant="destructive">
                    Cancel
                </Button>
            </div>
        </motion.div>
    )
}
