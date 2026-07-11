import foundersImg from '../../../images/photos/founders.webp'
import matchaSpotImg from '../../../images/photos/matcha-spot.webp'
import halalImg from '../../../images/photos/halal-logo.webp'

const blocks = [
  {
    title: 'Кто мы',
    text: 'Мы — небольшая команда энтузиастов, влюблённых в культуру матча. Открыли первую точку в 2022 году с одной целью: дать каждому попробовать настоящий японский матча.',
  },
  {
    title: 'Наша философия',
    text: 'Мы верим, что качество — это не компромисс. Используем только церемониальный матча первого помола из Удзи (Япония) и молоко от проверенных поставщиков.',
  },
  {
    title: 'Сертификаты',
    text: null, // rendered separately with logo
  },
  {
    title: 'Наша миссия',
    text: 'Сделать матча частью повседневной жизни — не модным трендом, а любимым утренним ритуалом, который заряжает без лишнего стресса.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 bg-cream-50">
      <div className="max-w-lg mx-auto px-6 flex flex-col gap-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-matcha-800 text-center">МЫ</h2>

        {/* Block 1 */}
        <div>
          <h3 className="text-xl font-medium text-matcha-700 mb-3">{blocks[0].title}</h3>
          <p className="text-matcha-600 font-light leading-relaxed">{blocks[0].text}</p>
        </div>

        {/* Photo between 1 and 2 */}
        <img
          src={foundersImg}
          alt="Основатели"
          className="rounded-2xl w-full object-cover aspect-video"
        />

        {/* Block 2 */}
        <div>
          <h3 className="text-xl font-medium text-matcha-700 mb-3">{blocks[1].title}</h3>
          <p className="text-matcha-600 font-light leading-relaxed">{blocks[1].text}</p>
        </div>

        {/* Photo between 2 and 3 */}
        <img
          src={matchaSpotImg}
          alt="Наш зал"
          className="rounded-2xl w-full object-cover aspect-video"
        />

        {/* Block 3 — halal */}
        <div>
          <h3 className="text-xl font-medium text-matcha-700 mb-3">{blocks[2].title}</h3>
          <div className="flex items-center gap-4">
            <img src={halalImg} alt="Halal сертификат" className="w-16 h-16 object-contain" />
            <p className="text-matcha-600 font-light text-sm leading-relaxed">
              Все наши напитки сертифицированы халяль и подходят для вегетарианцев.
            </p>
          </div>
        </div>

        {/* Block 4 */}
        <div>
          <h3 className="text-xl font-medium text-matcha-700 mb-3">{blocks[3].title}</h3>
          <p className="text-matcha-600 font-light leading-relaxed">{blocks[3].text}</p>
        </div>
      </div>
    </section>
  )
}
