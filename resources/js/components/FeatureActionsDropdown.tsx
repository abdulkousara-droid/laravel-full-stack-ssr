import {Link, router} from "@inertiajs/react";
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Feature } from '@/types';

export default function FeatureActionsDropdown({feature}: { feature: Feature }) {

  const handleDelete = () => {
      if (confirm('Are you sure you want to delete this feature?')) {
          router.delete(route('feature.destroy', feature.id));
      }
  };

  return (
      <div className="absolute top-4 right-4 z-10">
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="end">
                  <DropdownMenuItem asChild>
                      <Link href={route('feature.edit', feature.id)}>Edit</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={handleDelete}
                  >
                      Delete
                  </DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>
      </div>
  );
}
