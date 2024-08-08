import clipboardCopy from 'clipboard-copy';
import { toast } from 'react-toastify';

const CopyToClipboard = (number:string) => {
    clipboardCopy(number)
        .then(() => {
            toast.success('با موفقیت کپی شد!');
        })
        .catch(err => {
            toast.error('کپی نشد.');
            console.error('Failed to copy:', err);        
        });
    };
export default CopyToClipboard;