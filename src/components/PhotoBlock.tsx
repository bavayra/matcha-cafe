import CafeLeftImg from '../../images/photos/cafe-left.webp'
import DisplayImg from '../../images/photos/display.webp'
import CafeLogoImg from '../../images/photos/logo-wall.webp'

export default function PhotoBlock() {
  return (
    <section className="relative py-16 bg-[var(--cream-main)]">
      <div className="max-w-[80vw] mx-auto lg:grid lg:grid-cols-3 lg:gap-6 2xl:gap-12">
        <img src={CafeLeftImg} alt="Кафе вид слева" className="w-full mb-6 rounded-lg shadow-lg" />
        <img src={DisplayImg} alt="Витрина" className="w-full mb-6 rounded-lg shadow-lg" />
        <img src={CafeLogoImg} alt="Логотип на стене" className="w-full rounded-lg shadow-lg" />
      </div>
    </section>
  )
}
