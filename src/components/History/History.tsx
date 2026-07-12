import matchaGoodImg from '../../../images/photos/matcha-good.webp'
import matchaProductsImg from '../../../images/photos/matcha-products.webp'

import ScrollAnimateImage from '../ScrollAnimateImage'

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

const photos = [matchaGoodImg, matchaProductsImg]

export default function History() {
  return (
    <section id="history" className="py-16 bg-[var(--green-main)] ">
      <div className="max-w-lg md:max-w-2xl mx-auto px-6 flex flex-col gap-6">
        <h2 className="section-title font-bold text-center text-[var(--yellow-main)]">МАТЧА?</h2>

        {blocks.map((block, i) => (
          <div key={i} className="flex flex-col gap-6">
            <p className="font-light leading-relaxed text-[var(--yellow-text)] history-font-size">
              {block.text}
            </p>

            {i < photos.length && (
              <ScrollAnimateImage
                src={photos[i]}
                alt="История матчи, ее польза и продукты"
                direction={i % 2 === 0 ? 'right' : 'left'}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
