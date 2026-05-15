import { Head, useForm } from '@inertiajs/react';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // This is your custom textarea/input
import { Label } from '@/components/ui/label';
import { TextAreaInput } from '@/components/ui/TextAreaInput';
import type { Feature } from '@/types';


interface FeatureForm {
    name: string;
    description: string;
}

export default function Edit({ feature }: { feature: Feature }) {
    const { data, setData, put, processing, errors } = useForm<FeatureForm>({
        name: feature.name,
        description: feature.description,
    });

    const updateFeature: React.FormEventHandler = (e) => {
        e.preventDefault();
        put(route('feature.update', feature.id), {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="Edit Feature" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <form className="space-y-6" onSubmit={updateFeature}>
                    <div className="grid gap-2">
                        <Label htmlFor="name">New Feature</Label>
                        <Input
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            placeholder="Feature name"
                        />
                        {errors.name && (
                            <div className="text-sm text-red-500">
                                {errors.name}
                            </div>
                        )}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <TextAreaInput
                            id="description"
                            className="mt-1 block w-full"
                            rows={8}
                            value={data.description}
                            onChange={(e) =>
                                setData('description', e.target.value)
                            }
                            placeholder="Feature description"
                        />
                        {errors.description && (
                            <div className="text-sm text-red-500">
                                {errors.description}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving...' : 'Save'}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
