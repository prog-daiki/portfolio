import Heading from "@/components/heading"
import { Newspaper } from "lucide-react"

const ArticlePage = () => {
  return (
    <>
      <Heading
        title="Article"
        icon={Newspaper}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
      <div className="px-4 md:px-10 lg:px-32 space-y-8">
        <p className="text-muted-foreground">こちらはまだ準備中です。。。</p>
      </div>
    </>
  )
}

export default ArticlePage
