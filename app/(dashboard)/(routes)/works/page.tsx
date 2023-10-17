import Heading from "@/components/heading";
import WorksItem from "@/components/works-item";
import { AppWindow, ArrowRight } from "lucide-react";

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
          tech="Next.js, React.js, Typescript, TailwindCSS, Shadcn-ui"
          func="レスポンシブデザイン, ダークモード"
        />
        <WorksItem
          href="https://tech-market-prog.vercel.app"
          title="TechMarket"
          description="ガジェット商品専門の架空のフリーマーケットサイト"
          tech="Next.js, React.js, Typescript, TailwindCSS, prisma, mongodb, Shadcn-ui"
          func="レスポンシブデザイン, 会員登録機能, 商品の出品機能, 画像のアップロード機能, お気に入り登録機能, 検索機能"
        />
        <WorksItem
          href="https://portfolio-study-share.vercel.app"
          title="StudyShare（*未完成）"
          description="学習のアウトプットを共有するサイト"
          tech="Next.js, React.js, Typescript, TailwindCSS, prisma, mongodb, Shadcn-ui"
          func="レスポンシブデザイン, 会員登録機能, 投稿機能, 画像のアップロード機能, お気に入り登録機能, フォロー機能, コメント機能, 通知機能"
        />
        <WorksItem
          href="https://auth-form-pi.vercel.app"
          title="AuthForm"
          description="NextAuthを用いた会員登録機能"
          tech="Next.js, React.js, Typescript, TailwindCSS, prisma, mongodb, NextAuth"
          func="レスポンシブデザイン, 会員登録機能, ログイン機能, ログアウト機能"
        />
      </div>
    </>
  );
};

export default WorksPage;
