export default function CustomSection(
  { children, className, sectionClassName, id }: { children: React.ReactNode, className?: string, sectionClassName?: string, id?: string }
) {
  return (
    <section id={id} className={`p-6 ${sectionClassName ? ' ' + sectionClassName : ''}`}>
      <div className={`max-w-screen-xl m-auto ${className ? ' ' + className : ''}`}>
        {children}
      </div>
    </section >
  )
}