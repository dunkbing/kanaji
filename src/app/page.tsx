import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NavTabs } from "@/components/nav-tabs"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <NavTabs />
      <div className="container max-w-screen-lg mx-auto py-6">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl text-primary-foreground">あ</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Kanaji</h1>
                <p className="text-sm text-muted-foreground">Learn Hiragana & Katakana</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              It&apos;s easy to use. Click{" "}
              <Link href="/hiragana" className="text-primary hover:underline font-medium">
                HIRAGANA
              </Link>{" "}
              and/or{" "}
              <Link href="/katakana" className="text-primary hover:underline font-medium">
                KATAKANA
              </Link>{" "}
              and choose which characters you&apos;d like to study.
            </p>
            <p>
              Then click{" "}
              <Button variant="default" size="sm" asChild>
                <Link href="/study">STUDY</Link>
              </Button>{" "}
              and type each character&apos;s rōmaji equivalent (e.g. &apos;a&apos;).
            </p>
            <p className="font-medium">That&apos;s it!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
