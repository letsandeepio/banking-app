import { navigation } from "../../utils/navigation";
import { classNames } from "../../App";
import { toast } from "sonner";

const DesktopSideBar = () => {
  return (
    <div className='flex min-h-0 flex-1 flex-col bg-gray-800'>
      <div className='flex h-16 flex-shrink-0 items-center bg-gray-900 px-4 text-white font-bold italic text-2xl'>
        Banking App
      </div>
      <div className='flex flex-1 flex-col overflow-y-auto'>
        <nav className='flex-1 space-y-1 px-2 py-4'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
              )}
              onClick={() => {
                if (item.name !== "My Accounts") {
                  toast(`Feature ${item.name} is not yet available`);
                }
              }}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-300"
                    : "text-gray-400 group-hover:text-gray-300",
                  "mr-3 h-6 w-6 flex-shrink-0"
                )}
                aria-hidden='true'
              />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DesktopSideBar;
