<?php
namespace App\Data\Models\DigitalWallet;
use Illuminate\Database\Eloquent\Model;
use Reshadman\OptimisticLocking\OptimisticLocking;
class Wallet extends Model
{
// This trait is use for optimistic locking for concurrent operation using `lock_version` field
// use OptimisticLocking;
public static $state_values = [
'New-Customer' => 1,
'Verified' => 2,
'Suspended' => 3,
'Fraud' => 4
];
public static $wallet_type_values = [
'Escrow-Wallet' => 1,
'System-Wallet' => 2,
'Digital-Wallet' => 3,
'Bank-Wallet' => 4
];
public static $wallet_type_names = [
1 => 'Escrow Wallet',
2 => 'System Wallet',
3 => 'Digital Wallet',
4 => 'Sales Wallet'
];
public static $passbook_type_name = [
'Digital-Wallet' => 1,
'Bank-Wallet' => 2,
];
/**
*
* @purpose : This function is use to fetch the wallet transaction detail data.
* @author : Anshul Pareek
* @created_at : 17th may,2019 at 03:33 PM.
*
* @return \Illuminate\Database\Eloquent\Relations\hasMany
*/
public function walletTransactionDetails()
{
return $this->hasMany(WalletTransactionDetail::class);
}
}





