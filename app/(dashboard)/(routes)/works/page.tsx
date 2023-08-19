import Heading from "@/components/heading"
import WorksItem from "@/components/works-item"
import { AppWindow, ArrowRight } from "lucide-react"

const WorksPage = () => {
  return (
    <>
      <Heading
        title="Works"
        icon={AppWindow}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 md:px-10 lg:px-32 space-y-8">
        <WorksItem
          href="/"
          title="Portfolio"
          description="制作物や記事をまとめたポートフォリオサイト"
          tech="Next.js, React.js, Typescript, TailwindCSS, Shadcn - ui"
          func="レスポンシブデザイン, ダークモード"
        />
        <WorksItem
          href="https://tech-market-portfolio.vercel.app"
          title="TechMarket"
          description="ガジェット商品専門の架空のフリーマーケットサイト"
          tech="Next.js, React.js, Typescript, TailwindCSS, prisma mongodb"
          func="レスポンシブデザイン, 会員登録機能, 商品の出品機能, 画像のアップロード機能, お気に入り登録機能"
        />
      </div>
    </>
  )
}

export default WorksPage
