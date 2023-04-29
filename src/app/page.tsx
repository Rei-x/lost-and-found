import Link from "next/link";
export default function Page() {
  return (
    <>
      <div className="flex w-full flex-auto flex-col items-center justify-center bg-slate-200">
        <div className="prose">
          <Link href="/found">
            <h1>I found an item</h1>
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-auto flex-col items-center justify-center  ">
        <div className="prose">
          <Link href="/lost">
            <h1>I lost an item</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
