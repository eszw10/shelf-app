import { NotebookPen, BookMarked, ChartNoAxesCombined } from "lucide-react";

const Features = () => {
  return (
    <div className="flex flex-col gap-14">
      <h1 className="text-4xl font-bold text-main text-center">Features</h1>
      <div className="flex gap-10 justify-center">
        <div className="flex flex-col gap-2 w-96">
          <NotebookPen className="text-main" size={40} />
          <h3 className="mt-1 font-bold text-lg">Manage Books</h3>
          <p className="text-gray-500 text-justify">
            Effortlessly add, remove, or edit books in your collection. Whether
            you want to log a new title, remove one that no longer fits, or
            update details like reading status and personal notes, managing your
            books is quick and easy.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-96">
          <BookMarked className="text-main" size={40} />
          <h3 className="mt-1 font-bold text-lg">Categories & Labels</h3>
          <p className="text-gray-500">
            Organize your books by genre, priority, or custom labels for easy
            access and management of your collection.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-96">
          <ChartNoAxesCombined className="text-main" size={40} />
          <h3 className="mt-1 font-bold text-lg">Track Progress & Stats</h3>
          <p className="text-gray-500 text-justify">
            Stay motivated by updating your reading progress with the number of
            pages or chapters you&apos;ve completed. Visual statistics help you
            monitor your reading habits, such as total books read per month or
            average reading time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
