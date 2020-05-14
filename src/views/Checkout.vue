<template>
  <div class="checkout">
    <Navbar></Navbar>
    <div class="container mt-5 pt-5">
			<div class="row">
				<div class="col-md-8">
					<h4 class="py-4">Checkout Page</h4>
					<ul>
							<li v-for="item in this.$store.state.cart" class="media">
								<img :src="item.productImage" width="80px" class="align-self-center mr-3" alt="">
								<div class="media-body">
									<h5 class="mt-0">{{item.productName}}
										<span class='float-right btn' @click="$store.commit('removeFromCart',item)"><i class="fa fa-times-circle"></i></span>
									</h5>
									<p class="mt-0">{{item.productPrice | currency('Kshs. ')}}</p>
									<p class="mt-0">Quantity : {{item.productQuantity }}</p>
								</div>
							</li>
				  	</ul>
				</div>
				<div class="col-md-4">
					<h5>Total Price : {{ this.$store.getters.totalPrice | currency('Kshs. ') }}</h5>
					<card class='stripe-card'
            :class='{ complete }'
            stripe='pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'
            :options='stripeOptions'
            @change='complete = $event.complete'
          />
          	<button class='pay-with-stripe btn btn-primary mt-4' @click='pay' :disabled='!complete'>Pay with credit card</button>                
          </form>
				</div>
			</div>
		</div>
  </div>
</template>
<style scoped>
	.StripeElement {
		box-sizing: border-box;

		height: 40px;

		padding: 10px 12px;

		border: 1px solid transparent;
		border-radius: 4px;
		background-color: white;

		box-shadow: 0 1px 3px 0 #e6ebf1;
		-webkit-transition: box-shadow 150ms ease;
		transition: box-shadow 150ms ease;
	}

	.StripeElement--focus {
		box-shadow: 0 1px 3px 0 #cfd7df;
	}

	.StripeElement--invalid {
		border-color: #fa755a;
	}

	.StripeElement--webkit-autofill {
		background-color: #fefde5 !important;
	}
</style>