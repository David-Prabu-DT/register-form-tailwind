import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../services/auth.service";

interface userInfo {
  username?: string;
  email?: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<userInfo>({});

  useEffect(() => {
    let userInfo = AuthService.getUserInfo();
    setUserInfo(userInfo);
  }, []);

  const handleLogOut = () => {
    AuthService.logOutUser(navigate);
  };

  return (
    <>
      <h1 className="text-2xl text-center">Welcome User</h1>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg leading-6 text-gray-900">User Information</h2>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">User Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {userInfo && userInfo?.username}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {userInfo && userInfo?.email}
              </dd>
            </div>

            <div className="-space-y-px px-2 py-2">
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default Home;
