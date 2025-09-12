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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <motion.div
                key="form"
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
                    {/* Section dropdown */}
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
                        onClick={onSave}
                        className="bg-green-600 hover:bg-green-700"
                    >
                        Save
                    </Button>
                    <Button onClick={onCancel} variant="destructive">
                        Cancel
                    </Button>
                </div>
            </motion.div>
        </div>
    )
}
