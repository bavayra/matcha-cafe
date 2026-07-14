import { useState, useEffect } from 'react'
import matchaLeafImg from '../../../images/photos/tea-leaf.webp'
import matchaAntioxidantsImg from '../../../images/photos/antiox.webp'
import matchaFormulasImg from '../../../images/photos/formulas.webp'

import matchaProductsImg from '../../../images/photos/matcha-products-nobg.webp'

import ScrollAnimateImage from '../ScrollAnimateImage'

const carouselImages = [matchaLeafImg, matchaAntioxidantsImg, matchaFormulasImg]

const blocks = [
  {
    text: 'Матча – это не просто зелёный порошок, а «энергетик» буддийских монахов. Её начали молоть ещё век назад в Китае, но японцы довели всё до эстетики: чайная церемония, бамбуковый венчик, тишина, дзен и полное отсутствие спешки. Тогда матча помогала не засыпать на многочасовых медитациях, сейчас – не выгореть в буднях.',
  },
  {
    text: 'Фишка в том, что в матче ты пьёшь не просто настой, а весь чайный лист целиком. Огромное количество антиоксидантов, L-теанин и природный кофеин замедляют износ организма, убирают тревожность и дают ощущение спокойной собранности. Природный кофеин из матчи высвобождается плавно, поэтому вместо резкого «подъёма и падения», ты получаешь длительную, мягкую энергию.',
  },
  {
    text: 'Сегодня матча – это целая культура. Кто‑то пьёт её по классике на воде, кто‑то любит матча-латте на овсяном или кокосовом молоке, кто‑то использует в смузи, выпечку и десерты. Если блюдо существует, в него уже кто-то добавил матчу.',
  },
]

export default function History() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % carouselImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="history" className="py-16 bg-[var(--green-main)]">
      <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-6 2xl:max-w-6xl">
        <h2 className="section-title font-bold text-center text-[var(--yellow-main)] mb-8">
          МАТЧА?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 md:gap-y-10  lg:gap-y-20 xl:gap-x-20">
          <div className="flex items-center order-1 lg:order-none">
            <p className="font-light text-center md:text-left leading-relaxed text-[var(--yellow-text)] history-font-size">
              {blocks[0].text}
            </p>
          </div>
          <div className="relative w-full history-carousel-img mx-auto aspect-square overflow-hidden order-2 lg:order-none rounded-2xl ">
            {carouselImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="История матчи"
                className={`absolute inset-0 w-full mx-auto h-full object-contain duration-700 ease-in-out ${
                  idx === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          <div className="lg:pr-10 order-4 lg:order-none">
            <ScrollAnimateImage
              src={matchaProductsImg}
              alt="Матча продукты"
              direction="left"
              className="lg:max-w-[35vw] mx-auto"
            />
          </div>
          <div className="flex items-center order-3 lg:order-none">
            <p className="font-light text-center md:text-left leading-relaxed text-[var(--yellow-text)] history-font-size">
              {blocks[1].text}
            </p>
          </div>

          <div className="lg:col-span-2 order-5 lg:order-none">
            <p className="font-light text-center md:text-left leading-relaxed text-[var(--yellow-text)] history-font-size">
              {blocks[2].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
