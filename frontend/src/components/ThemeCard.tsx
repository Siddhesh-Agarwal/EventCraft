import { Link } from "react-router-dom";
import { ThemePreview } from "@/types/Theme";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ThemeCard({ data }: { data: ThemePreview }) {
    return (
        <Link to={`/theme/${data.themeId}`} className="flex h-full">
            <Card className="flex flex-col bg-gray-50 shadow-md dark:bg-slate-900 h-full">
                <CardContent className="flex flex-1 items-center justify-center w-full">
                    <img
                        alt="Classic"
                        className="overflow-hidden object-contain rounded-t-xl w-full h-auto"
                        src={data.themeImageURL}
                    />
                </CardContent>
                <CardHeader className="p-4">
                    <CardTitle className="text-3xl text-black dark:text-gray-100">
                        {data.themeName}
                    </CardTitle>
                    <CardDescription className="text-md text-gray-700 dark:text-gray-300">
                        {data.themeDescription}
                    </CardDescription>
                </CardHeader>
            </Card>
        </Link>
    )
}
