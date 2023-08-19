import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface WorksItemProps {
  href: string;
  title: string;
  description: string;
  tech: string;
  func: string;
}

const WorksItem: React.FC<WorksItemProps> = ({
  href,
  title,
  description,
  tech,
  func,
}) => {
  return (
    <>
      <Link href={href}>
        <div
          className="rounded-md p-6 flex justify-between hover:shadow-md transition cursor-pointer border border-input bg-background hover:bg-white/10 hover:text-accent-foreground mb-6">
          <div className="flex flex-col gap-y-4 ">
            <div className="">
              <h3 className="font-bold text-3xl md:text-4xl">{title}</h3>
            </div>
            <div>
              <p className="text-muted-foreground font-semibold text-sm">
                {description}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">
                使用技術 : {tech}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">
                実装した機能 : {func}
              </p>
            </div>
          </div>
          <div className="flex items-end">
            <ArrowRight />
          </div>
        </div>
      </Link>
    </>
  )
}

export default WorksItem
