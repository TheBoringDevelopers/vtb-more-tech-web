import { H3 } from 'src/shared/ui';
import { Copy, Facebook, Home, Mail, Menu, MessageSquare, Phone, Truck,  Twitter } from 'react-feather';

export const MainInfo = () => {
  return (
    <div className="bg-[#F5F5F5] py-3 px-4 rounded-lg">
      <div className="rounded-lg bg-white py-3 px-4">
        {/*

        */}
        <div className="flex flex-col items-center bg-[#F5F5F5] py-6 mb-4">
          <img src="/images/avatar.png" alt="avatar" className="mb-3"/>
          <span className="text-lg font-[700] mb-1">Антон Маркин</span>
          <span className="text-sm text-[#828282] mb-6">UI/UX Designer</span>
          <div className="flex gap-8 justify-between">
            <button className="flex-shrink-0 flex-grow-0 flex flex flex-col items-center">
              <div className="rounded-full w-12 h-12 p-2.5 bg-white flex items-center justify-center mb-3">
                <MessageSquare />
              </div>

              <span className="text-xs text-slate-500/90 font-semibold">Чат</span>
            </button>
            <button className="flex-shrink-0 flex-grow-0 flex flex flex-col items-center">
              <div className="rounded-full w-12 h-12 p-2.5 bg-white flex items-center justify-center mb-3">
                <Phone />
              </div>
              <span className="text-xs text-slate-500/90 font-semibold">Позвонить</span>
            </button>
            <button className="flex-shrink-0 flex-grow-0 flex flex flex-col items-center">
              <div className="rounded-full w-12 h-12 p-2.5 bg-white flex items-center justify-center mb-3">
                <Mail />
              </div>

              <span className="text-xs text-slate-500/90 font-semibold">Почта</span>
            </button>
            <button className="flex-shrink-0 flex-grow-0 flex flex flex-col items-center">
              <div className="rounded-full w-12 h-12 p-2.5 bg-white flex items-center justify-center mb-3">
                <Menu />
              </div>

              <span className="text-xs text-slate-500/90 font-semibold">Еще</span>
            </button>
          </div>
        </div>
        {/*
         end info
        */}

        <div className="flex justify-between w-full mb-3">
          <H3>Место работы</H3>
          <span className="text-blue-600 font-semibold text-sm pr-3">В офисе</span>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="rounded-full w-10 h-10 p-2.5 bg-[#F3F3F3] flex items-center justify-center">
            <Home />
          </div>
          <span className="text-sm leading-130 font-semibold">г. Москва, ул. Кузнецкий мост, д. 17, стр.</span>
        </div>

        <div className="flex justify-between w-full mb-3">
          <H3>Авто</H3>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="rounded-full w-10 h-10 p-2.5 bg-[#F3F3F3] flex items-center justify-center">
            <Truck />
          </div>
          <span className="text-sm leading-130 font-semibold">Infiniti FX35</span>
        </div>

        <div className="flex justify-between w-full mb-3">
          <H3>Контакты</H3>
        </div>

        <div className="space-y-3.5 pr-4">
          <div className="w-full flex justify-between items-center">
            <a href="tel:+6494461709" className="flex gap-2 items-center">
              <div className="rounded-full w-10 h-10 p-2.5 bg-[#F3F3F3] flex items-center justify-center">
                <Phone />
              </div>
              <span className="text-sm leading-130 font-semibold">+7 (099) 323-32-22</span>
            </a>

            <Copy className="stroke-slate-500 hover:stroke-black w-4 cursor-pointer" />
          </div>

          <div className="w-full flex justify-between items-center">
            <a href="tel:+6494461709" className="flex gap-2 items-center">
              <div className="rounded-full w-10 h-10 p-2.5 bg-[#F3F3F3] flex items-center justify-center">
                <Phone />
              </div>
              <span className="text-sm leading-130 font-semibold">+7 (099) 143-32-14</span>
            </a>

            <Copy className="stroke-slate-500 hover:stroke-black w-4 cursor-pointer" />
          </div>

          <div className="w-full flex justify-between items-center">
            <a href="tel:+6494461709" className="flex gap-2 items-center">
              <div className="rounded-full w-10 h-10 p-2.5 bg-[#F3F3F3] flex items-center justify-center">
                <Mail />
              </div>
              <span className="text-sm leading-130 font-semibold text-blue-700">Antonmar@corp.vtb.com</span>
            </a>

            <Copy className="stroke-slate-500 hover:stroke-black w-4 cursor-pointer" />
          </div>

          <div className="w-full flex justify-between items-center">
            <a href="tel:+6494461709" className="flex gap-2 items-center">
              <div className="rounded-full w-10 h-10 p-2.5 bg-[#F3F3F3] flex items-center justify-center">
                <Facebook />
              </div>
              <span className="text-sm leading-130 font-semibold text-blue-700">@oleg</span>
            </a>

            <Copy className="stroke-slate-500 hover:stroke-black w-4 cursor-pointer" />
          </div>

          <div className="w-full flex justify-between items-center">
            <a href="tel:+6494461709" className="flex gap-2 items-center">
              <div className="rounded-full w-10 h-10 p-2.5 bg-[#F3F3F3] flex items-center justify-center">
                <Twitter />
              </div>
              <span className="text-sm leading-130 font-semibold text-blue-700">@oleg00</span>
            </a>

            <Copy className="stroke-slate-500 hover:stroke-black w-4 cursor-pointer" />
          </div>

        </div>

      </div>
    </div>
  )
}
