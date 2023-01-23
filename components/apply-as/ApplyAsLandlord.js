import Card from '../ui/Card';

export default function ApplyLandlord() {
    return (
        <>
            <Card>
                <div  className="flex justify-between">
                    <div>
                        <img className="w-8" src="/assets/icons/applyas/house.png" alt=""/>
                    </div>
                    <div className="flex items-center">
                        <input
                            id={1}
                            name="notification-method"
                            type="radio"
                            defaultChecked={true}
                            className="h-4 w-4 border-gray-300 text-brand-primary focus:ring-indigo-700"
                        />
                        <label htmlFor={'test'} className="ml-3 block text-sm font-medium text-gray-700">
                            Test
                        </label>
                    </div>
                </div>
                <p className="text-lg font-bold text-brand-secondary mt-4">I'm landlord, listing my property.</p>
            </Card>
        </>
    )
}
