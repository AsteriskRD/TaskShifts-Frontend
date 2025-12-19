export default function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-4 sm:mb-5 lg:mb-6">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-1 sm:mb-1.5 lg:mb-2">
        {title}
      </h1>
      <p className="text-sm sm:text-base lg:text-base text-gray-500">
        {subtitle}
      </p>
    </div>
  )
}