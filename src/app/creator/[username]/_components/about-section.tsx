import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


interface AboutSectionProps {
    description?: string;
    name?: string;
}

export function AboutSection({description, name}: AboutSectionProps) {
  return(
    <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:bg-white duration-300">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <div className="h-6 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          Sobre {name}
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          Conheça mais sobre {name} e seu trabalho.
        </p>
      </CardHeader>
      <CardContent>
        <div className="">
          <p className="text-sm sm:text-base lg:text-lgf text-gray-600">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}