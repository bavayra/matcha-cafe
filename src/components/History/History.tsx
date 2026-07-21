import { useState, useEffect } from 'react'
import matchaLeafImg from '../../../images/photos/tea-leaf.webp'
import matchaAntioxidantsImg from '../../../images/photos/antiox.webp'
import matchaFormulasImg from '../../../images/photos/formulas.webp'

import matchaProductsImg from '../../../images/photos/matcha-products-nobg.webp'

import ScrollAnimateImage from '../ScrollAnimateImage'
import GlowBackground from '../GlowBackground'

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
    <section id="history" className="relative py-16 bg-[var(--green-main)] md:py-24">
      <GlowBackground
        color="bg-[var(--yellow-main)]"
        position="top-[50%] left-[-10%]"
        size="h-[450px] w-[450px]"
        blur="blur-[120px]"
      />
      <div className="section-width mx-auto px-6">
        <h2 className="section-title text-[var(--yellow-main)] mb-8 xl:mb-16">МАТЧА?</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 md:gap-y-10  lg:gap-y-20 xl:gap-x-20">
          <div className="flex items-center order-1 lg:order-none">
            <p className="typography-body text-[var(--yellow-text)]">{blocks[0].text}</p>
          </div>
          <div className="relative order-2 lg:order-none z-10 w-full max-w-xl mx-auto">
            <GlowBackground
              color="bg-[var(--yellow-main)]"
              position="top-[-15%] left-0"
              size="h-[450px] w-[450px]"
              blur="blur-[120px]"
              opacity="0.3"
            />
            <div className="relative w-full history-carousel-img mx-auto aspect-square overflow-hidden order-2 lg:order-none rounded-2xl z-10 ">
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
          </div>
          <div className="lg:pr-10 order-4 lg:order-none">
            <ScrollAnimateImage
              id="matcha-products"
              src={matchaProductsImg}
              alt="Матча продукты"
              direction="left"
              className="lg:max-w-[35vw]"
            />
          </div>
          <div className="flex items-center order-3 lg:order-none">
            <p className="text-[var(--yellow-text)] typography-body">{blocks[1].text}</p>
          </div>

          <div className="lg:col-span-2 order-5 lg:order-none">
            <p className="text-[var(--yellow-text)] typography-body">{blocks[2].text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
