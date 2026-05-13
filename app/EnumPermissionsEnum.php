<?php

namespace App;

enum EnumPermissionsEnum: String
{
    case ManageFeatures = 'mange_features';
    case ManageUsers = 'manage_users';
    case ManageComments = 'manage_comments';

    case UpvoteDownvote = 'upvote_downvote';

}
