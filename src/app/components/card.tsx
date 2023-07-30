type props = {
  startDate: string;
  title: string;
  credencialId?: string;
  authority: string;
  link: string;
};

export default function Card({
  link,
  title,
  authority,
  startDate,
  credencialId,
}: props) {
  return (
    <div className="flex flex-col w-96 h-48  rounded-lg bg-white px-6 pt-5  dark:bg-neutral-700">
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {title} - <span>{authority}</span>
      </h5>
      <span className="text-base text-neutral-600 dark:text-neutral-200">
        {startDate}
      </span>
      <span className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
        {credencialId}
      </span>
      <a
        className="mb-3 no-underline hover:underline dark:text-neutral-50"
        href={link}
        target="_blank"
      >
        View
      </a>
    </div>
  );
}
