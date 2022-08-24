<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscription_plans = [
            [
                'name' => 'Basic',
                'price' => 20000,
                'active_period_in_months' => 3,
                'featured' => json_encode(['features2', 'features2'])
            ],
            [
                'name' => 'Premium',
                'price' => 80000,
                'active_period_in_months' => 6,
                'featured' => json_encode(['features2', 'features2', 'features3', 'features4'])
            ]
        ];

        SubscriptionPlan::insert($subscription_plans);
    }
}
