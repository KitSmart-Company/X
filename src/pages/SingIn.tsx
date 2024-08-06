import React, { FC, ReactElement } from "react";
import ModalBlock from "../components/ModalBlock";
import XIcon from "@mui/icons-material/X";
import AppleIcon from "@mui/icons-material/Apple";
import Footer from "../components/Footer";

const SingIn: FC = (): ReactElement => {
  const [visibleModal, setvisibleModal] = React.useState<"singIn" | "singUp">(); // don't reapen your self

  const handleClickOpenSingIn = (): void => {
    // Для того чтобы открыть модальное окно исп singIn.
    setvisibleModal("singIn");
  };

  const handleClickOpenSingUp = () => {
    setvisibleModal("singUp");
  };

  const handleCloseModal = (): void => {
    // Для того чтобы закрыть singIn выход исп singOut.
    setvisibleModal(undefined);
  };

  return (
    <>
      <div className="flex  m-auto h-[94vh]">
        <section className=" lg:justify-center lg:items-center lg:flex sm:hidden items-center relative justify-center  w-[50%]">
          <ul className="text-xl px-10 font-bold line-clamp-4 z-0 ont-bold text-white">
            <XIcon
              style={{ fontSize: "24rem", color: "#E7E9EA", width: "100%" }}
            />
          </ul>
        </section>
        <section className="m-auto">
          <div className="reletive w-[600px]">
            <ul className="text-xl sm:block lg:hidden absolute top-7 font-bold line-clamp-4 z-0 ont-bold text-white">
              <XIcon
                style={{ fontSize: "4rem", color: "#E7E9EA", width: "100%" }}
              />
            </ul>
            <h4 className="font-bold leading-[5.2rem] text-[rgb(231,233,234)] text-[4.5rem] mb-[3rem]">
              В курсе происходящего
            </h4>
            <p className="font-bold text-4xl mb-[30px] text-[rgb(231,233,234)]">
              Присоединяйтесь сегодня.
            </p>
            <button className="bg-white w-[300px] p-2 mb-[10px] outline-none text-[15px] rounded-full active:bg-blue-100 transition-all font-bold text-black flex justify-center items-center gap-3">
              <img
                width={15}
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png "
                alt="google"
              />
              <span>Зарегистрироваться с Google</span>
            </button>
            <button className="bg-white outline-none p-2 w-[300px] text-[15px] rounded-full active:bg-blue-100 transition-all font-bold text-black flex justify-center items-center gap-3">
              <AppleIcon /> <span>Зарегистрироваться с Apple ID</span>
            </button>
            <div className="flex mt-2 gap-2 items-center">
              <div className="w-[8rem] h-[1px] bg-[#3b3b3b]"></div>
              <span>или</span>
              <div className="w-[8rem] h-[1px] bg-[#3b3b3b]"></div>
            </div>
            <button
              onClick={handleClickOpenSingUp}
              className="bg-[#1198F8] w-[300px] mt-3 mb-3 flex flex-wrap justify-center outline-none active:opacity-90 rounded-full cursor-pointer text-white font-bold p-2"
            >
              Зарегистрироваться
            </button>
            <div className="text-[11px] leading-[12px] text-[#71767B] w-[300px]">
              <span>
                Регистрируясь, вы соглашаетесь с
                <a
                  href="#"
                  className="text-[#1198F8] text-decoration-line: hover:underline"
                >
                  Условиями предоставления услуг
                </a>
                и
                <a
                  href="#"
                  className="text-[#1198F8] text-decoration-line: hover:underline"
                >
                  Политикой конфиденциальности
                </a>
                , а также с
                <a
                  href="#"
                  className="text-[#1198F8] text-decoration-line: hover:underline"
                >
                  Политикой использования файлов cookie.
                </a>
              </span>
            </div>

            <h3 className="mt-[3rem] font-bold text-[18px]">
              Уже зарегистрированы?
            </h3>
            <button
              onClick={handleClickOpenSingIn}
              className="p-2 w-[300px] border mt-[1rem] a active:opacity-90 active:bg-blue cursor-pointer outline-none text-[#1198F8] font-bold rounded-full border-[#1198F8]"
            >
              Войти
            </button>
            {/* 2 Создаем компаонент модального окна ModalBlock и переходим по нему */}
            <ModalBlock
              onClose={handleCloseModal}
              visible={visibleModal === "singUp"}
              title=""
            >
              <div className="flex justify-center mb-1">
                <XIcon style={{ fontSize: "2rem" }} />
              </div>
              <div className="flex justify-center flex-wrap mt-8">
                <div className="flex flex-col">
                  <h1 className="font-bold text-3xl mb-10">Регистраци в X</h1>
                  <button className="bg-white w-[300px] outline-none p-2 mb-[10px] text-[15px] rounded-full active:bg-blue-100 transition-all font-bold text-black flex justify-center items-center gap-3">
                    <img
                      width={15}
                      src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                      alt="google"
                    />
                    <span>Зарегистрироваться с Google</span>
                  </button>
                  <button className="bg-white outline-none p-2 w-[300px] text-[15px] rounded-full active:bg-blue-100 transition-all font-bold text-black flex justify-center items-center gap-3">
                    <AppleIcon /> <span>Зарегистрироваться с Apple ID</span>
                  </button>
                  <div className="flex mt-2 gap-2 items-center">
                    <div className="w-[8rem] h-[1px] bg-[#0F1419]"></div>
                    <span>или</span>
                    <div className="w-[8rem] h-[1px] bg-[#0F1419]"></div>
                  </div>
                  <div className="mb-5 mt-2 flex flex-col w-full">
                    <input
                      type="email"
                      placeholder="Номер телефона, адрес электронной почты"
                      className="border-[1px] placeholder:text-[18px] placeholder:font-[300] placeholder:text-[#71767B] border-[#0F1419] bg-black p-3.5 rounded-[3px] outline-none"
                    />
                  </div>
                  <input
                    type="password"
                    placeholder="Пароль"
                    className="border-[1px] placeholder:text-[18px] placeholder:font-[300] placeholder:text-[#71767B] border-[#0F1419] bg-black p-3.5 rounded-[3px] outline-none"
                  />
                  <button className="bg-[#EDF1F2] mt-8 text-black m-auto w-full flex flex-wrap justify-center outline-none active:opacity-90 rounded-full cursor-pointer font-bold p-2">
                    Войти
                  </button>
                </div>
              </div>
            </ModalBlock>
            <ModalBlock
              onClose={handleCloseModal}
              visible={visibleModal === "singIn"}
              title=""
            >
              <div className="flex justify-center mb-1">
                <XIcon style={{ fontSize: "2rem" }} />
              </div>
              <div className="flex justify-center flex-wrap mt-8">
                <div className="flex flex-col">
                  <h1 className="font-bold text-3xl mb-10">Вход в X</h1>
                  <button className="bg-white w-[300px] p-2 mb-[10px] text-[15px] rounded-full active:bg-blue-100 transition-all font-bold text-black flex justify-center items-center gap-3">
                    <img
                      width={15}
                      src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                      alt="google"
                    />
                    <span>Зарегистрироваться с Google</span>
                  </button>
                  <button className="bg-white outline-none p-2 w-[300px] text-[15px] rounded-full active:bg-blue-100 transition-all font-bold text-black flex justify-center items-center gap-3">
                    <AppleIcon /> <span>Зарегистрироваться с Apple ID</span>
                  </button>
                  <div className="flex mt-2 gap-2 items-center">
                    <div className="w-[8rem] h-[1px] bg-[#333639]"></div>
                    <span>или</span>
                    <div className="w-[8rem] h-[1px] bg-[#333639]"></div>
                  </div>
                  <div className="mb-5 mt-2 flex flex-col w-full">
                    <input
                      type="email"
                      placeholder="Номер телефона, адрес электронной почты"
                      className="border-[1px] placeholder:text-[18px] placeholder:font-[300] placeholder:text-[#797979] border-[#4b4b4b] bg-black p-3.5 rounded-[3px] outline-none"
                    />
                  </div>
                  <input
                    type="password"
                    placeholder="Пароль"
                    className="border-[1px] placeholder:text-[18px] placeholder:font-[300] placeholder:text-[#797979] border-[#4b4b4b] bg-black p-3.5 rounded-[3px] outline-none"
                  />
                  <button className="bg-[#EDF1F2] mt-8 text-black m-auto w-full flex flex-wrap justify-center outline-none active:opacity-90 rounded-full cursor-pointer font-bold p-2">
                    Войти
                  </button>
                </div>
              </div>
            </ModalBlock>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SingIn;
