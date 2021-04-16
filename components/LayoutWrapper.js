import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import HeaderContainer from './HeaderContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <HeaderContainer>
        <header className="flex items-center justify-between pt-6 pb-10">
          <Link href="/" aria-label="Tailwind CSS Blog">
            <div className="flex items-center justify-between">
              {/* <div className="mr-3">
                <Logo />
              </div> */}
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-3xl tracking-tight font-black sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>          
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
      </HeaderContainer>
      <SectionContainer>
        <div className="flex flex-col justify-between h-screen">
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
