import { useLocalization } from "../hooks/useLocalization";
import { Button } from "./ui/button";

export default function AccountDeletionForm() {
  const locale = useLocalization();
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // open the default email client with the following fields pre-filled
    window.open(
      `mailto:${locale.configurable.email}` +
        `?subject=Account Deletion Request` +
        `&body=Hello, I would like to request the deletion of my account.`
    );
  };
  return (
    <div className="grid items-center gap-4 px-4 py-6 mx-auto max-w-sm rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {locale.support.form}
        <br />
        <br />
        {locale.support.form1}
        <br />
        {locale.support.form2}
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Button className="w-full text-white" type="submit">
          {locale.support.request}
        </Button>
      </form>
    </div>
  );
}
