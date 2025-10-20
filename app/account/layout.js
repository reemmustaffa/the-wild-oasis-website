import SideNavigation from "../_components/SideNavigation";

// Layout for account section يعني دا متخصص لنفس الليفل بتاعه اللي هو اكونت
export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
