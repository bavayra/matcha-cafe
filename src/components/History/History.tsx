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
      <div className="max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto px-6">
        <h2 className="section-title font-bold text-center text-[var(--yellow-main)] mb-8">
          МАТЧА?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-14">
          {/* Ряд 1, кол 1: первый текстовый блок */}
          <div className="flex items-center order-1 lg:order-none">
            <p className="font-light text-center md:text-left leading-relaxed text-[var(--yellow-text)] history-font-size">
              {blocks[0].text}
            </p>
          </div>

          {/* Ряд 1, кол 2: карусель */}
          <div className="relative w-full aspect-square overflow-hidden rounded-2xl order-2 lg:order-none">
            {carouselImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="История матчи"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  idx === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Ряд 2, кол 1: выплывающая картинка с отступом справа */}
          <div className="lg:pr-10 order-4 lg:order-none">
            <ScrollAnimateImage src={matchaProductsImg} alt="Матча продукты" direction="left" />
          </div>

          {/* Ряд 2, кол 2: второй текстовый блок */}
          <div className="flex items-center order-3 lg:order-none">
            <p className="font-light text-center md:text-left leading-relaxed text-[var(--yellow-text)] history-font-size">
              {blocks[1].text}
            </p>
          </div>

          {/* Ряд 3: третий текстовый блок на обе колонки */}
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
