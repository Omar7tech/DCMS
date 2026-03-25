import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "@/components/mode-toggle"

export default function Settings() {
  return (
    <>
      <PageHeader title="Settings" />
      
      <div className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="theme">Theme</Label>
                <p className="text-sm text-muted-foreground">
                  Select the theme for the application.
                </p>
              </div>
              <ModeToggle />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
