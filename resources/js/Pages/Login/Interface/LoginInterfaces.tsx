export default interface PageProps {
    flash?: {
        error?: string | null;
        success?: string | null;
    };
    errors?: {
        email?: string;
        password?: string;
    };
    [key: string]: any;
}
