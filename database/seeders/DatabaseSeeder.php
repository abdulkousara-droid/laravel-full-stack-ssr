<?php

namespace Database\Seeders;

use App\EnumPermissionsEnum;
use App\EnumRolesEnum;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $userRole = Role::create(['name' => EnumRolesEnum::User->value]);
        $commenterRole = Role::create(['name' => EnumRolesEnum::Commenter->value]);
        $adminRole = Role::create(['name' => EnumRolesEnum::Admin->value]);

        $manageFeaturesPermission = Permission::create(['name' => EnumPermissionsEnum::ManageFeatures->value]);
        $manageCommentsPermission = Permission::create(['name' => EnumPermissionsEnum::ManageComments->value]);
        $manageUsersPermission = Permission::create(['name' => EnumPermissionsEnum::ManageUsers->value]);
        $upvoteDownvotePermission = Permission::create(['name' => EnumPermissionsEnum::UpvoteDownvote->value]);

        $userRole->syncPermissions([$upvoteDownvotePermission]);
        $commenterRole->syncPermissions([$upvoteDownvotePermission, $manageCommentsPermission]);
        $adminRole->syncPermissions([$upvoteDownvotePermission, $manageCommentsPermission, $manageUsersPermission, $manageFeaturesPermission]);


        User::factory()->create([
            'name' => 'User User',
            'email' => 'test@example.com',
        ])->assignRole(EnumRolesEnum::User);

        User::factory()->create([
            'name' => 'Commenter User',
            'email' => 'commenter@example.com',
        ])->assignRole(EnumRolesEnum::Commenter);

        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
        ])->assignRole(EnumRolesEnum::Admin);
    }
}
