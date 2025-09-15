import { Service } from "@/components/context/serviceContentContext";

export default interface ServiceFormProps {
    form: Partial<Service>;
    setForm: React.Dispatch<React.SetStateAction<Partial<Service>>>;
    isAdding: boolean;
    onSave: () => void;
    onCancel: () => void;
}
