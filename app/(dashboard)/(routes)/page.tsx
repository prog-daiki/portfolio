import { ModeToggle } from '../../../components/mode-toggle';
import DashboardItem from "@/components/dashboard-item";


const DashboardPage = () => {
  return (
    <>
      <div className="mb-8 space-y-4 px-4 md:px-20 lg:px-32">
        <div className='flex justify-between '>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Portfolio Site
          </h2>
          <ModeToggle />
        </div>
        <p className="text-muted-foreground text-sm font-light md:text-lg ">
          制作したものや記事を掲載しています
        </p>
      </div>
      <DashboardItem />
    </>

  )
}

export default DashboardPage
