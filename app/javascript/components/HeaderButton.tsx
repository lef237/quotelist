import React, { useState } from "react";

type Props = {
  isLogin: boolean;
  userId: number;
};

const HeaderButton = ({isLogin, userId}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    form.submit();
  };

  const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute("content") || "";

  return (
    <header className="">
      <div className="flex items-center">
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="btn btn-xs bg-gray-600 hover:bg-gray-700 text-white"
          >
            ☰
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              {isLogin ? (
                <>
                  <a
                    href={`/users/show/${userId}`}
                    className="btn btn-xs bg-blue-800 hover:bg-blue-900 text-white mr-2"
                  >
                    マイページ
                  </a>
                  <a
                    href="/users/edit"
                    className="btn btn-xs bg-gray-600 hover:bg-gray-700 text-white mr-2"
                  >
                    登録情報編集
                  </a>
                  <form
                    action="/users/sign_out"
                    method="POST"
                    onSubmit={handleLogout}
                  >
                    <input type="hidden" name="_method" value="delete" />
                    <input type="hidden" name="authenticity_token" value={csrfToken} />
                    <input
                      type="submit"
                      value="ログアウト"
                      className="btn btn-xs bg-gray-800 hover:bg-gray-900 text-white"
                    />
                  </form>
                </>
              ) : (
                <>
                  <a
                    href="/users/sign_in"
                    className="btn btn-xs bg-gray-600 hover:bg-gray-700 text-white mr-2"
                  >
                    ログイン
                  </a>
                  <a
                    href="/users/sign_up"
                    className="btn btn-xs bg-gray-500 hover:bg-gray-600 text-white"
                  >
                    新規登録
                  </a>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderButton;
