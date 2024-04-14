import { Card, CardContent } from "../ui/Сard";

const News: React.FC = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Новини</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="w-full">
          <CardContent>
            <div className="h-48 bg-gray-300 mb-4" />
            <h3 className="font-bold mb-2">Lorem ipsum dolor sit amet consectetur at dictumst.</h3>
            <p className="text-sm text-gray-600 mb-2">Названіе ігри</p>
            <p className="text-xs text-gray-500">26.02.2024</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardContent>
            <div className="h-48 bg-gray-300 mb-4" />
            <h3 className="font-bold mb-2">Lorem ipsum dolor sit amet consectetur at dictumst.</h3>
            <p className="text-sm text-gray-600 mb-2">Названіе ігри</p>
            <p className="text-xs text-gray-500">26.02.2024</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardContent>
            <div className="h-48 bg-gray-300 mb-4" />
            <h3 className="font-bold mb-2">Lorem ipsum dolor sit amet consectetur at dictumst.</h3>
            <p className="text-sm text-gray-600 mb-2">Названіе ігри</p>
            <p className="text-xs text-gray-500">26.02.2024</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default News;
