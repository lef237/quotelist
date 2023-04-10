// // app/javascript/components/Header.jsx
// import React, { useState } from "react";

// const HeaderButton = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="">
//       {/* 他のコードは同じままです */}
//       <div className="flex items-center">
//         {/* スマホ表示時のドロップダウンメニュー */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="btn btn-xs bg-gray-600 hover:bg-gray-700 text-white"
//           >
//             ☰
//           </button>
//           {menuOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
//               {/* ここにドロップダウンメニューの内容を入れる */}
//             </div>
//           )}
//         </div>
//         {/* デスクトップ表示時の通常メニュー */}
//         <div className="hidden md:flex">
//           {/* 通常メニューの内容をここに入れる */}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default HeaderButton;



// import React, { useState } from "react";

// const HeaderButton = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleLogout = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     form.submit();
//   };

//   return (
//     <header className="">
//       {/* 他のコードは同じままです */}
//       <div className="flex items-center">
//         {/* スマホ表示時のドロップダウンメニュー */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="btn btn-xs bg-gray-600 hover:bg-gray-700 text-white"
//           >
//             ☰
//           </button>
//           {menuOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
//               {/* ドロップダウンメニューの内容 */}
//               {/* ユーザーがログインしている場合 */}
//               {true ? (
//                 <>
//                   <a
//                     href="/users/show/1"
//                     className="btn btn-xs bg-blue-800 hover:bg-blue-900 text-white mr-2"
//                   >
//                     マイページ
//                   </a>
//                   <a
//                     href="/users/edit"
//                     className="btn btn-xs bg-gray-600 hover:bg-gray-700 text-white mr-2"
//                   >
//                     登録情報編集
//                   </a>
//                   <form
//                     action="/users/sign_out"
//                     method="POST"
//                     onSubmit={handleLogout}
//                   >
//                     <input type="hidden" name="_method" value="delete" />
//                     <input
//                       type="submit"
//                       value="ログアウト"
//                       className="btn btn-xs bg-gray-800 hover:bg-gray-900 text-white"
//                     />
//                   </form>
//                 </>
//               ) : (
//                 // ユーザーがログインしていない場合
//                 <>
//                   <a
//                     href="/users/sign_in"
//                     className="btn btn-xs bg-gray-600 hover:bg-gray-700 text-white mr-2"
//                   >
//                     ログイン
//                   </a>
//                   <a
//                     href="/users/sign_up"
//                     className="btn btn-xs bg-gray-500 hover:bg-gray-600 text-white"
//                   >
//                     新規登録
//                   </a>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//         {/* デスクトップ表示時の通常メニュー */}
//         {/* <div className="hidden md:flex"> */}
//           {/* 通常メニューの内容をここに入れる */}
//         {/* </div> */}
//       </div>
//     </header>
//   );
// };




import React, { useState } from "react";

const HeaderButton = ({isLogin, userId}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    const form = e.target;
    form.submit();
  };

  const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");

  return (
    <header className="">
      {/* 他のコードは同じままです */}
      <div className="flex items-center">
        {/* スマホ表示時のドロップダウンメニュー */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="btn btn-xs bg-gray-600 hover:bg-gray-700 text-white"
          >
            ☰
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              {/* ドロップダウンメニューの内容 */}
              {/* ユーザーがログインしている場合 */}
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
                // ユーザーがログインしていない場合
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
        {/* デスクトップ表示時の通常メニュー */}
        {/* <div className="hidden md:flex"> */}
          {/* 通常メニューの内容をここに入れる */}
        {/* </div> */}
      </div>
    </header>
  );
};

export default HeaderButton;
