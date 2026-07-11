import matchaGoodImg from '../../../images/photos/matcha-good.webp'
import matchaProductsImg from '../../../images/photos/matcha-products.webp'

const blocks = [
  {
    title: 'Тысячелетняя традиция',
    text: 'Матча появилась в Китае около 960 года нашей эры и была завезена в Японию буддийскими монахами. Первоначально её готовили исключительно в монастырях как медитативный напиток.',
  },
  {
    title: 'Путь к совершенству',
    text: 'Японские мастера чайной церемонии превратили приготовление матча в высокое искусство. Листья притеняют за несколько недель до сбора, чтобы усилить вкус умами и насыщенность цвета.',
  },
  {
    title: 'Матча сегодня',
    text: 'Сегодня матча переживает возрождение по всему миру. Её ценят за антиоксиданты, мягкий кофеин без тревожности и универсальность вкуса — от классики до ярких коктейлей.',
  },
]

const photos = [matchaGoodImg, matchaProductsImg]

export default function History() {
  return (
    <section id="history" className="py-16 bg-matcha-900 text-cream-100">
      <div className="max-w-lg mx-auto px-6 flex flex-col gap-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center">МАТЧА?</h2>

        {blocks.map((block, i) => (
          <div key={i} className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3">{block.title}</h3>
              <p className="font-light leading-relaxed text-cream-200">{block.text}</p>
            </div>

            {/* Photo between blocks, but not after the last one */}
            {i < photos.length && (
              <img
                src={photos[i]}
                alt={`История матча — ${i + 1}`}
                className="rounded-2xl w-full object-cover aspect-video"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
