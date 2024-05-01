import './GradientHeading.css'

export const GradientHeading = ({ text }) => {
  return (
    <h2 className="font-bold text-3xl lg:text-4xl text-center gradient-heading-2 mb-12 mt-20">{ text }</h2>
  )
}
