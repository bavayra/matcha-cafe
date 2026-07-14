import foundersImg from '../../../images/photos/founders.webp'
import matchaSpotImg from '../../../images/photos/matcha-spot.webp'
import halalImg from '../../../images/photos/halal-logo.webp'
import ScrollAnimateImage from '../ScrollAnimateImage'

const blocks = [
  {
    title: 'Кто мы',
    text: 'Мы – двое друзей из Казахстана, которые по‑настоящему любят матчу. Мы заметили, что найти у нас качественную матчу с хорошим сырьём, интересным выбором и уважением к её культуре практически невозможно. Тогда мы решили создать своё место, где матча будет в центре внимания – такой, какой мы хотели бы видеть её сами. Так появилась Sulu.',
  },
  {
    title: 'SULU?',
    text: 'Sulu – это не просто красивое слово. Наше имя можно прочитать как «изящный, утончённый» – таким мы видим мир матчи: аккуратные движения, чистый вкус, внимание к деталям и уважение к моменту «здесь и сейчас».',
  },
  {
    title: 'СЕРТИФИКАТЫ',
    text: null, // rendered separately with logo
  },
  {
    title: 'МИССИЯ?',
    text: 'Мы хотим привить в Казахстане культуру матчи:   показать, что это не просто модный зелёный напиток, а целый ритуал и стиль жизни;   дать доступ к качественному, проверенному сырью;   создать место, где матча – не «дополнение к меню», а главный герой. ',
  },
  {
    title: 'ЧТО ДЛЯ НАС ВАЖНО?',
    text: 'Качество сырья. Мы тщательно выбираем производителей, смотрим на происхождение, способ обработки и вкус.Разнообразие. Классическая матча, матча-латте, холодные напитки, авторские сочетания – мы хотим, чтобы ты нашёл свою. Культура. Для нас важно не просто налить напиток, а рассказать историю: от чайных полей до твоей чашки.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 bg-[var(--cream-main)]">
      <div className="max-w-lg mx-auto md:max-w-2xl px-6 flex flex-col gap-8 text-[var(--green-text)]">
        <h2 className="section-title text-[var(--green-main)]">МЫ</h2>

        {/* Block 1 */}
        <div className="grid grid-column md:grid-cols-2 justify-center items-center gap-6 mb-4">
          <div>
            <h3 className="hidden mb-3">{blocks[0].title}</h3>
            <p className="typography-body">{blocks[0].text}</p>
          </div>
          <ScrollAnimateImage
            src={foundersImg}
            alt="Основатели Sulu"
            direction="right"
            className="founders-img"
          />
        </div>
        {/* Block 2 */}
        <div>
          <h3 className="h3-title">{blocks[1].title}</h3>
          <p className="typography-body">{blocks[1].text}</p>
        </div>

        {/* Photo between 2 and 3 */}
        <ScrollAnimateImage
          src={matchaSpotImg}
          alt="Интерьер кафе Sulu"
          direction="left"
          className="md:max-w-[60vw] mx-auto lg:max-w-[35vw]"
        />
        {/* Block 4 */}
        <div>
          <h3 className="h3-title">{blocks[3].title}</h3>
          <p className="typography-body">{blocks[3].text}</p>
        </div>

        <div>
          <h3 className="h3-title">{blocks[4].title}</h3>
          <p className="typography-body">{blocks[4].text}</p>
        </div>

        <div>
          <h3 className="h3-title">{blocks[2].title}</h3>
          <div className="flex items-center gap-4 bg-[var(--green-text)] rounded-xl p-4">
            <img src={halalImg} alt="Halal сертификат" className="w-16 h-16 object-contain" />
            <p className="typography-body text-[var(--yellow-text)]">
              Все наши напитки сертифицированы халяль и подходят для вегетарианцев.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
