import { HeartIcon, MessageSquareIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Сard';

const Community: React.FC = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Цікаве від Спільноти</h2>
            <div className="grid grid-cols-2 gap-4">
                <Card className="w-full">
                    <CardContent>
                        <div className="h-48 bg-gray-300 mb-4" />
                        <h3 className="font-bold mb-2">Інтересний заголовок обсуждения</h3>
                        <p className="text-sm mb-4">
                            Lorem ipsum dolor sit amet consectetur. Amet nulla risus commodo in n. Massa risus aliquet ut justo mauris blandit massa dolor
                            vulputate. Pretium sit ullamcorper cursus cursus amet quis duis. Eu non faucibus varius orci eleifend vitae. Arcu et etiam urna neque
                            ut.
                        </p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <div className="flex items-center">
                                <HeartIcon className="text-gray-500 mr-1" />
                                10k{'\n                                  '}
                            </div>
                            <div className="flex items-center">
                                <MessageSquareIcon className="text-gray-500 mr-1" />
                                584{'\n                                  '}
                            </div>
                            <Button variant="ghost">Share</Button>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full">
                    <CardContent>
                        <div className="h-48 bg-gray-300 mb-4" />
                        <h3 className="font-bold mb-2">Інтересний заголовок обсуждения</h3>
                        <p className="text-sm mb-4">
                            Lorem ipsum dolor sit amet consectetur. Amet nulla risus commodo in n. Massa risus aliquet ut justo mauris blandit massa dolor
                            vulputate. Pretium sit ullamcorper cursus cursus amet quis duis. Eu non faucibus varius orci eleifend vitae. Arcu et etiam urna neque
                            ut.
                        </p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                            <div className="flex items-center">
                                <HeartIcon className="text-gray-500 mr-1" />
                                10k{'\n                                  '}
                            </div>
                            <div className="flex items-center">
                                <MessageSquareIcon className="text-gray-500 mr-1" />
                                584{'\n                                  '}
                            </div>
                            <Button variant="ghost">Share</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Community;
