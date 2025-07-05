package com.alan.orcamentoapi.request;


public record OrcamentoPostRequest(String nameClient,
                                   String cpfClient,
                                   String typeService,
                                   Double valueService,
                                   String description) {

}
